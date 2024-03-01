const Workspace = (props) => {
    return (
        <div className='d-flex'>
            <div className='p-2 w-100'>
                <div className='p-1 w-100'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Workspace}
