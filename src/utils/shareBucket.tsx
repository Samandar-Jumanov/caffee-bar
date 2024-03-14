import { Storage } from '@google-cloud/storage';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
};

const storage = new Storage();
const bucketName = process.env.GCLOUD_STORAGE_BUCKET as string 


 const  saveToBucket = async (  file : File | string | null ) =>{
      try{
        const bucket = storage.bucket(bucketName);
        const fileName = `uploads/${Date.now()}-image`; 
        const fileHandle = bucket.file(fileName);
        await fileHandle.save(Buffer.from(file as string ), {
            contentType: 'image/jpeg', 
          });
    
        return fileHandle.publicUrl();
      }catch(error : any ){
          return "Error saving file in bucket"
      }
};

export default saveToBucket





