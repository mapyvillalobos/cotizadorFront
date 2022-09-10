import { useState } from 'react'
import { PackageForm } from '../components';
import { createPackageWs } from "../services/package-ws"



const packageCreate = () => {
    // const [imageURL, setImageURL] = useState('')
    // const configUpload = {
    //     name: 'image',
    //     action: 'http://localhost:5005/api/upload/single',
    //     onChange(info) {
    //         if (info.file.status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }

    //         if (info.file.status === 'done') {
    //             console.log("que es info", info)
    //             setImageURL(info.file.response.url.uri)
    //             message.success(`${info.file.name} file uploaded successfully`);
    //         } else if (info.file.status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },

    // }

    // const onFinish = (values) => {
    //     createPackageWs({ ...values })
    //         .then(res => {
    //             const { status, data, errorMessage } = res;
    //             if (status) {
    //                 props.authentication(data.user)
    //             } else {
    //                 console.log("error actualizar", errorMessage)
    //             }
    //         })
    // }

    return (
        <div>
                    <PackageForm/>
        </div>
    )
};

export default packageCreate;