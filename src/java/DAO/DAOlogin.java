/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpSession;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import pojo.GHSHotelUtil;
import pojo.Loginadmin;

/**
 *
 * @author M. BAGAS
 */
public class DAOlogin {
     public List<Loginadmin> getBy(String uName, String uPass)
    {
        Transaction trans = null;
        Loginadmin us = new Loginadmin();
        List<Loginadmin> user = new ArrayList();
        Session session =GHSHotelUtil.getSessionFactory().openSession();
        try{
            trans = session.beginTransaction();
            Query query = session.createQuery("from Loginadmin where username=:uName AND password=:uPass");
            query.setString("uName",uName);
            query.setString("uPass",uPass);
            us = (Loginadmin) query.uniqueResult();
            user = query.list();
            trans.commit();
        }catch (Exception e){
            System.out.println(e);
        }
        return user;
   
    }  
}
