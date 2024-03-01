import { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import iziToast from 'izitoast';
import { InputB } from "./templates/InputB"

const Listado = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/posts')
            .then(response => setData(response.data.data))
            .catch(error => console.error('Error:', error));
    }, []);

    const calculateDaysAgo = (date) => {
        const currentDate = new Date();
        const postDate = new Date(date);
        const difference = currentDate.getTime() - postDate.getTime();
        const daysAgo = Math.floor(difference / (1000 * 3600 * 24));
        return daysAgo > 1 ? `Hace ${daysAgo} dias` : daysAgo === 1 ? 'Ayer' : 'Hace un momento';
    };
    

    const Buscar = () => {
        return (
            <div>
                <h3>Búsqueda</h3>
                <Formik
                    initialValues={{ filtro: 0, search: '' }}
                    validationSchema={Yup.object({
                        filtro: Yup.number()
                            .required('El filtro es requerido')
                            .oneOf([1,2,3], 'Selecciona un tipo de filtro válido'),
                        search: Yup.string().required('La búsqueda es requerida'),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        axios.post('http://localhost:8000/api/search', values)
                            .then(response => {
                                if (response.data.data.length === 0) {
                                    iziToast.warning({
                                        title: 'Sin resultados',
                                        message: 'No se encontraron resultados para la búsqueda.',
                                        position: 'bottomRight'
                                    });
                                } else {
                                    setData(response.data.data);
                                }
                                resetForm();
                            })
                            .catch(error => {
                                console.log(error);
                                iziToast.error({
                                    title: 'Error',
                                    message: 'Error al enviar los datos',
                                    position: 'bottomRight',
                                });
                            })
                            .finally(() => {
                                setSubmitting(false);
                            });
                    }}
                >
                    <Form>
                        <div className="row p-2">
                            <InputB
                                as='select' label='Typo' idInput='filtro' nameInput='filtro' classNameInput='form-select' 
                                typeInput='text' placeholderInput='' ErrorMessage={true}
                                classNameDiv='col-md-4 col-sm-12 p-2' classNameError='col-12 text-start fs-6 lh-1 py-2 px-4 text-danger fw-bold'
                            >
                                <option value={0}>Selecciona el tipo de Usuario</option>
                                <option value={1}>Titulo</option>
                                <option value={2}>Contenido</option>
                                <option value={3}>Autor</option>
                            </InputB>

                            <InputB as='input' label='Buscar' idInput='search' nameInput='search' classNameInput='form-control text-center' 
                                typeInput='text' placeholderInput='' ErrorMessage={true}
                                classNameDiv='col-md-4 col-sm-12 p-2' classNameError='col-12 text-start fs-6 lh-1 py-2 px-4 text-danger fw-bold'
                            />
                            <div className="col-md-4 col-sm-12 text-center">
                                <button type='submit' className='btn btn-primary btn-lg'>Buscar</button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        );
    };

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Buscar />
                </div>
                <div className="col-12">
                    <div>
                        {data.map(item => (
                            <div className="card text-center" key={item.id}>
                                <div className="card-header">
                                    <h5 className="card-title">{item.autor}</h5>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.titulo}</h5>
                                    <p className="card-text">{item.contenido}</p>
                                </div>
                                <div className="card-footer text-body-secondary">
                                    {calculateDaysAgo(item.fecha)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listado;