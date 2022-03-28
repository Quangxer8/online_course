import React, { useEffect } from 'react';
import  { Register } from '../../components/index';
import { connect } from 'react-redux';
import { GET_ALL_TRAINING_PROGRAM } from '../../constant/ActionType';

// function FormRegister({navigation, dispatch, trainingPrograms}){
function FormRegister({navigation}){

    useEffect(()=>{
    //   dispatch({
    //       type: GET_ALL_TRAINING_PROGRAM
    //   })  
    },[])

    return(
        // <Register navigation = {navigation} trainingPrograms={trainingPrograms}/>
        <Register navigation = {navigation} />
    )
}

// const mapStateToProps = (state) =>({
//     trainingPrograms : state.trainingProgram,
// })

// const mapDispatchToProps = (dispatch) =>({
//     dispatch
// })
// export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
export default FormRegister;