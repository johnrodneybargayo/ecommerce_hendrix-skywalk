import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import styles from './OrdersPage.module.scss';

interface Invoice {
  id: number;
  customerName: string;
  totalAmount: number;
  status: string;
}

const OrdersPage: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_TARGET_LOCAL}/payments/stripe-webhook/`); 
      setInvoices(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching invoices:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.ordersPage}>
      <Header />
      <h1>Invoices</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.invoicesList}>
          {invoices.map((invoice) => (
            <div key={invoice.id} className={styles.invoice}>
              <div className={styles.invoiceDetails}>
                <p>Invoice ID: {invoice.id}</p>
                <p>Customer Name: {invoice.customerName}</p>
                <p>Total Amount: ${invoice.totalAmount}</p>
                <p>Status: {invoice.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default OrdersPage;
