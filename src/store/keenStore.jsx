   import {create} from 'zustand' 
    
//step 1 Create Store
    const keenStore =(set) =>({
        firstName : 'Sakeen',
        lastName : 'On',
        address : {
            street :'1234',
            zipcode : '5678'
        },
        profile: ['Sakeenah', 'Yusoh'],
        products: [
            {id:1, title:'ASUS', price: 10000},
            {id:2, title: 'MSI', price: 20000},
        ],
        number : 5,

    actionIncrease: () =>{
        console.log('easy!!!')
        set((state)=> ({number: state.number +1}))
    },
    
    actionDecrease:()=>{
        set((state) => ({number: state.number -1}))
    },

    actionDecrease1:()=>{
        set((state) => ({number: Math.max(0,state.number -1) }))
    },

    actionTimes : () =>{
        console.log('some')
        set((state)=> ({number: state.number * 2}))
    },
    actionDivide:() =>{
        set((state)=> ({number: state.number /2}))
    },
    actionDivide1:(n) =>{
        set((state) =>({number: state.number /2}))
    }
    })
    const useKeenStore = create(keenStore)

    export default useKeenStore