import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServicesGrid = () => {
  // Variabel animasi muncul
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Web Development */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-1"
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Image
              src="/images/image23.jpg" // Ganti path gambar di sini
              alt="Centralized Data Management"
              width={600}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Centralized Data Management
              </h3>
              <p className="text-gray-600">
                Simplify operations with centralized control. ProChain
                centralizes data on products, purchasing, pricing, stock counts,
                and inventory transfers, giving you a complete overview in one
                place. This powerful system supports various industries,
                allowing businesses to manage multiple locations efficiently
                while maintaining accurate records of product details and
                inventory. With real-time updates, you’ll always have access to
                the latest information for faster, data-driven decisions.
              </p>
            </div>
          </motion.div>

          {/* Mobile Development */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-1"
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Image
              src="/images/mobile-development.jpg"
              alt="Mobile Development"
              width={600}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Order & Delivery Tracking
              </h3>
              <p className="text-gray-600">
                Reliable tracking from purchase to delivery. With ProChain’s
                Order Management System, you can track purchase orders, monitor
                delivery status, and manage supplier relationships all in one
                platform. This solution helps minimize errors, reduce delays,
                and keep your customers satisfied by ensuring timely and
                accurate delivery. From order recording to tracking, ProChain
                provides transparency and control, making it easier to meet
                demand and respond to any issues promptly.
              </p>
            </div>
          </motion.div>

          {/* Internet of Things */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-1"
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Image
              src="/images/iot.jpg"
              alt="Internet of Things"
              width={600}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Warehouse & Inventory Control
              </h3>
              <p className="text-gray-600">
                Efficient management for multi-location stock. ProChain’s
                warehouse management system enables seamless transfer of stock
                between warehouses, ensuring optimal inventory levels across all
                locations. You can monitor stock in real-time, manage transfers,
                and even track usage at different sites to prevent both
                shortages and overstock. This flexibility makes ProChain ideal
                for businesses with multiple locations, helping to streamline
                supply chains and improve stock availability.
              </p>
            </div>
          </motion.div>

          {/* Artificial Intelligence */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-1"
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Image
              src="/images/ai.jpg"
              alt="Artificial Intelligence"
              width={600}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Comprehensive Reporting
              </h3>
              <p className="text-gray-600">
                Data insights for better decision-making. Get a clear view of
                your business performance with ProChain’s detailed reporting
                system. From sales and costs to inventory levels and financials,
                ProChain provides insights to help you make informed decisions.
                The reporting tools enable you to track trends, analyze costs,
                and adjust strategies for optimal growth. Combined with
                integration to Aiso Accounting System, you’ll have a complete
                view of your financial health at your fingertips.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
