   import {create} from 'zustand' 
    
//step 1 Create Store
    const keenStore =() =>({
        firstName : 'Sakeen',
        lastName : 'On',
        address : {
            street :'1234',
            zipcode : '5678'
        }
    })
    const useKeenStore = create(keenStore)

    export default useKeenStore