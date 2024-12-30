/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import java.util.ArrayList;
import java.util.List;
import net.sf.ehcache.hibernate.HibernateUtil;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import pojo.GHSHotelUtil;
import pojo.Loginadmin;
import pojo.OrderData;

/**
 *
 * @author M. BAGAS
 */
public class DAOcrud {
      
     public void add_data(OrderData data) {
    Transaction trans = null;
    Session session = null;
    
    try {
        session = GHSHotelUtil.getSessionFactory().openSession();
        trans = session.beginTransaction();
        
        session.save(data);
        trans.commit(); // Commit transaksi jika berhasil
    } catch (Exception e) {
        if (trans != null) {
            trans.rollback(); // Rollback jika ada kesalahan
        }
        System.out.println("Error saat menyimpan data: " + e.getMessage());
        e.printStackTrace(); // Cetak stack trace untuk debugging
    } 
}


    public List<OrderData> retrieveOrderData() {
    List<OrderData> orderList = new ArrayList<>();
    Transaction trans = null;
    Session session = GHSHotelUtil.getSessionFactory().openSession();
    try {
        trans = session.beginTransaction();
        Query query = session.createQuery("from OrderData");
        orderList = query.list();
        trans.commit();
    } catch (Exception e) {
        if (trans != null) trans.rollback();
        System.out.println("Error retrieving order data: " + e.getMessage());
        e.printStackTrace();
    } finally {
        session.close();
    }
    return orderList;
}

    public OrderData getbyID(Integer idU) {
    OrderData order = null;
    Transaction trans = null;
    Session session = GHSHotelUtil.getSessionFactory().openSession();
    try {
        trans = session.beginTransaction();
        Query query = session.createQuery("from OrderData where orderId = :id");
        query.setParameter("id", idU);
        order = (OrderData) query.uniqueResult();
        trans.commit();
    } catch (Exception e) {
        if (trans != null) trans.rollback();
        System.out.println("Error retrieving order by ID: " + e.getMessage());
        e.printStackTrace();
    } finally {
        session.close();
    }
    return order;
}


    
    public void deleteUser(Integer idU) {
    Session session = GHSHotelUtil.getSessionFactory().openSession();
    Transaction transaction = null;
    try {
        transaction = session.beginTransaction();
        OrderData order = (OrderData) session.load(OrderData.class, idU);
        if (order != null) {
            session.delete(order);
            transaction.commit();
        } else {
            System.out.println("OrderData with ID " + idU + " not found.");
        }
    } catch (Exception e) {
        if (transaction != null) transaction.rollback();
        System.out.println("Error deleting order data: " + e.getMessage());
        e.printStackTrace();
    } finally {
        session.close();
    }
}


    
    public void editUser(OrderData orderData) {
    Session session = GHSHotelUtil.getSessionFactory().openSession();
    Transaction transaction = null;
    try {
        transaction = session.beginTransaction();
        OrderData existingOrder = (OrderData) session.get(OrderData.class, orderData.getOrderId());
        if (existingOrder != null) {
            existingOrder.setName(orderData.getName());
            existingOrder.setEmail(orderData.getEmail());
            existingOrder.setNoTelp(orderData.getNoTelp());
            existingOrder.setCheckInDate(orderData.getCheckInDate());
            existingOrder.setBookingTime(orderData.getBookingTime());
            existingOrder.setPaket(orderData.getPaket());

            session.update(existingOrder);
            transaction.commit();
        } else {
            System.out.println("OrderData with ID " + orderData.getOrderId() + " not found.");
        }
    } catch (Exception e) {
        if (transaction != null) transaction.rollback();
        System.out.println("Error updating order data: " + e.getMessage());
        e.printStackTrace();
    } finally {
        session.close();
    }
}

    
}
