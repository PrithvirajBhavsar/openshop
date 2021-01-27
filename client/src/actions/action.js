import * as api from "../apis/api";

export const getUser = ()=> async (dispatch)=>{
    try {
      const gdata = await api.getUser();  
      dispatch({type:"getUser",data:gdata.data});
    } catch (error) {
        console.log(error);
    }
}


export const postUser = (user)=> async (dispatch)=>{
    try {
      const pdata = await api.postUser(user);  
      dispatch({type:"postUser",data:pdata});
    } catch (error) {
        console.log(error);
    }
}

export const postShop = (shop)=> async (dispatch)=>{
  try {
    const psdata = await api.postShop(shop);  
    dispatch({type:"postShop",data:psdata});
  } catch (erro) {
      console.log(erro);
  }
}

export const getShop = ()=> async (dispatch)=>{
  try {
    const gsdata = await api.getShop();
    dispatch({type:"getShop",data:gsdata.data})
  } catch (error) {
    console.log(error);
  }
}