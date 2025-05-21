"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import SampleConfirmation from "../../components/OrderTrackingSteps/SampleConfirmation";
import FabricInhoused from "../../components/OrderTrackingSteps/FabricInhoused";
import FabricQualityCheck from "../../components/OrderTrackingSteps/FabricQualityCheck";
import Production from "../../components/OrderTrackingSteps/Production";
import Packaging from "../../components/OrderTrackingSteps/Packaging";
import QualityCheck from "../../components/OrderTrackingSteps/QualityCheck";
import OutForDelivery from "../../components/OrderTrackingSteps/OutForDelivery";
import ConfirmPaymentTerms from "../../components/OrderTrackingSteps/ConfirmPaymentTerms";

const OrderTrackingStepsHome = () => {
  // Static order data with the first 3 steps completed, next 2 in progress
  const orderData = {
    orderNumber: "ORD12345",
    status: "In Production",
    productionSteps: {
      sampleConfirmation: "completed",
      fabricInhoused: "completed",
      fabricQualityCheck: "completed",
      production: "in-progress",
      packaging: "in-progress",
      qualityCheck: "not-started",
      outForDelivery: "not-started",
      confirmPaymentTerms: "not-started"
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-[#EDF5FF] border-[#233B6E] text-[#233B6E]";
      case "In Production":
        return "bg-[#FFF3E0] border-[#FF8C00] text-[#FF8C00]";
      case "Completed":
        return "bg-[#E8F5E9] border-[#4CAF50] text-[#4CAF50]";
      case "Delivered":
        return "bg-[#F3E5F5] border-[#9C27B0] text-[#9C27B0]";
      default:
        return "bg-[#EDF5FF] border-[#233B6E] text-[#233B6E]";
    }
  };

  return (
    <div className="space-y-4 bg-white rounded-[50px] p-2 mt-10">
      <div className="items-center mb-6 ml-10 mt-10">
        <h2 className="text-[46px] font-semibold text-[#1E4E79]">
          ORDER NO. {orderData.orderNumber}
        </h2>
        <span className={`text-[14px] px-4 rounded-full border ${getStatusColor(orderData.status)}`}>
          {orderData.status.toUpperCase()}
        </span>
      </div>

      <div>
        <SampleConfirmation 
          status={orderData.productionSteps.sampleConfirmation}
          orderData={orderData}
        />
        <FabricInhoused 
          status={orderData.productionSteps.fabricInhoused}
          orderData={orderData}
        />
        <FabricQualityCheck 
          status={orderData.productionSteps.fabricQualityCheck}
          orderData={orderData}
        />
        <Production 
          status={orderData.productionSteps.production}
          orderData={orderData}
        />
        <Packaging 
          status={orderData.productionSteps.packaging}
          orderData={orderData}
        />
        <QualityCheck 
          status={orderData.productionSteps.qualityCheck}
          orderData={orderData}
        />
        <OutForDelivery 
          status={orderData.productionSteps.outForDelivery}
          orderData={orderData}
        />
        <ConfirmPaymentTerms 
          status={orderData.productionSteps.confirmPaymentTerms}
          orderData={orderData}
        />
      </div>
    </div>
  );
};

export default OrderTrackingStepsHome;