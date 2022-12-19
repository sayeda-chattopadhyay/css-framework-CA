import * as api from "../../api/posts/index";
import * as templates from "../../templates/index";
import { getParamFromQueryString } from "../../utils/querryString.mjs";


export async function populateEditPostForm(){
    try{
        const id = getParamFromQueryString ("id");
        if(!id){
          return templates.displayError() 
        }
    }
}