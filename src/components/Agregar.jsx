import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import iziToast from 'izitoast';
import { InputB } from "./templates/InputB"

const Agregar = () => {
    return (
        <div>
            <h1>Agregar</h1>
            <Formik
                initialValues={{ autor: '', titulo: '', contenido: '' }}
                validationSchema={Yup.object({
                    autor: Yup.string().required('El autor es requerido'),
                    titulo: Yup.string().required('El titulo es requerido'),
                    contenido: Yup.string().required('El contenido es requerido'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    axios.post('http://localhost:8000/api/store', values)
                        .then(response => {
                            if(response.data.data != 0){
                                iziToast.success({
                                    title: 'Éxito',
                                    message: 'Datos enviados correctamente',
                                    position: 'bottomRight',
                                })
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
                        <InputB as='input' label='Autor' idInput='autor' nameInput='autor' classNameInput='form-control text-center' 
                            typeInput='text' placeholderInput='Autor' ErrorMessage={true}
                            classNameDiv='col-md-6 col-sm-12 p-2' classNameError='col-12 text-start fs-6 lh-1 py-2 px-4 text-danger fw-bold'
                        />
                        <InputB as='input' label='Titulo' idInput='titulo' nameInput='titulo' classNameInput='form-control text-center' 
                            typeInput='text' placeholderInput='Titulo' ErrorMessage={true}
                            classNameDiv='col-md-6 col-sm-12 p-2' classNameError='col-12 text-start fs-6 lh-1 py-2 px-4 text-danger fw-bold'
                        />
                        <InputB as='textarea' label='Contenido' idInput='contenido' nameInput='contenido' classNameInput='form-control text-center' 
                            typeInput='text' placeholderInput='Contenido' ErrorMessage={true}
                            classNameDiv='col-md-12 col-sm-12 p-2' classNameError='col-12 text-start fs-6 lh-1 py-2 px-4 text-danger fw-bold'
                        />
                    </div>
                    <div className="row justify-content-center p-2">
                        <div className="col-md-4 col-sm-12 text-center">
                            <button type='submit' className='btn btn-primary btn-lg'>Agregar</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default Agregar;