package pojo;

import DAO.DAOcrud;
import java.util.Date;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.event.ComponentSystemEvent;

@ManagedBean
@SessionScoped
public class OrderData implements java.io.Serializable {

    private Integer orderId;
    private String name;
    private String email;
    private String noTelp;
    private Date checkInDate;
    private String bookingTime;
    private String paket;

    // Method to add order data
    public String add_dataorder() {
        DAOcrud add = new DAOcrud();
        try {
            add.add_data(this); // Save data
            return "successbooking"; // Redirect on success
        } catch (Exception e) {
            e.printStackTrace(); // Print error to console
            System.out.println("Data failed to save to database: " + e.getMessage());
            return "pagestandart"; // Redirect to error page on failure
        }
    }

    // Methods to set package type
    public void setStandardPackage(ComponentSystemEvent event) {
        this.paket = "standard"; // Set package type to "standard"
    }

    public void setLuxuryPackage(ComponentSystemEvent event) {
        this.paket = "luxury"; // Set package type to "luxury"
    }

    public void setDeluxePackage(ComponentSystemEvent event) {
        this.paket = "deluxe"; // Set package type to "deluxe"
    }

    public String add_dataorderadmin() {
        DAOcrud add = new DAOcrud();
        add.add_data(this);
        return "successbooking_admin";
    }

    public List<OrderData> getAllRecords() {
        DAOcrud usr = new DAOcrud();
        return usr.retrieveOrderData();
    }

    public String getById() {
        DAOcrud usr = new DAOcrud();
        try {
            OrderData order = usr.getbyID(orderId);
            if (order != null) {
                name = order.getName();
                email = order.getEmail();
                noTelp = order.getNoTelp();
                checkInDate = order.getCheckInDate();
                bookingTime = order.getBookingTime();
                paket = order.getPaket();
                return "datadetail"; // Redirect to a page showing order details
            }
            return "orderdata_error"; // Redirect to error page if no order found
        } catch (Exception e) {
            e.printStackTrace();
            return "orderdata_error"; // Redirect to error page in case of exception
        }
    }

    public String edit() {
        DAOcrud usr = new DAOcrud();
        try {
            usr.editUser(this);
            return "orderdata"; // Redirect to a page showing updated data or a success message
        } catch (Exception e) {
            e.printStackTrace();
            return "error"; // Redirect to error page or handle the error
        }
    }

    public String delete() {
        DAOcrud usr = new DAOcrud();
        try {
            usr.deleteUser(orderId);
            return "orderdata"; // Redirect to a page showing remaining orders or a success message
        } catch (Exception e) {
            e.printStackTrace();
            return "error"; // Redirect to error page or handle the error
        }
    }

    // Getters and Setters
    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNoTelp() {
        return noTelp;
    }

    public void setNoTelp(String noTelp) {
        this.noTelp = noTelp;
    }

    public Date getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(Date checkInDate) {
        this.checkInDate = checkInDate;
    }

    public String getBookingTime() {
        return bookingTime;
    }

    public void setBookingTime(String bookingTime) {
        this.bookingTime = bookingTime;
    }

    public String getPaket() {
        return paket;
    }

    public void setPaket(String paket) {
        this.paket = paket;
    }
}
