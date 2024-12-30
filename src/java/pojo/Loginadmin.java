package pojo;
// Generated Oct 15, 2022 12:39:40 AM by Hibernate Tools 4.3.1

import DAO.DAOlogin;
import java.util.List;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;


/**
 * TblUser generated by hbm2java
 */
@ManagedBean 
public class Loginadmin  implements java.io.Serializable {


     private Integer idAdmin;
     private String username;
     private String password;
     
   
     
    public String login_user(){
         DAOlogin uDao = new DAOlogin(); 
         List<Loginadmin> us = uDao.getBy(username, password);
         try{
             if(us != null){
             username = us.get(0).username;
             password = us.get(0).password;
             return "indexadmin";
            }

        }catch (Exception e){
            System.out.println(e);
        }
        return "loginadmin_error";
     }
     
     
    public Loginadmin() {
    }

    public Loginadmin(String username, String password) {
       this.username = username;
       this.password = password;
    }
   
    public Integer getIdAdmin() {
        return this.idAdmin;
    }
    
    public void setIdAdmin(Integer idAdmin) {
        this.idAdmin = idAdmin;
    }
    public String getUsername() {
        return this.username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return this.password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }




}


