import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { AccountSave, BNPL, CC, Loan } from "@/components/images";
import { Typography } from "@/components/materialExport";
import Image from "next/image";

const Products = () => {
    // products
  const products = [
    {
        id: 1,
        image: CC,
        title: 'CREDIT CARDS',
        description: '100% Contactless Application Process with Instant Approval From Top Banks.',
        bg: '#edffec'
    },
    {
        id: 2,
        image: Loan,
        title: 'LOANS',
        description: '100% online process. Instant offers. Affordable Rate of Interest on loans.',
        bg: '#fff1ca'
    },
    {
        id: 3,
        image: BNPL,
        title: 'BUY NOW PAY LATER',
        description: 'Short-term financing that allows consumers to make purchases and pay for them over time.',
        bg: '#ffeee7'
    },
    {
        id: 4,
        image: AccountSave,
        title: 'SAVING ACCOUNTS',
        description: 'ZET offers range of savings account that suits your personal needs for the banking.',
        bg: '#fff5e7'
    },
  ];
  
  return (
    <div className="w-screen py-12 px-3 bg-gradient-to-br from-[#E9F4FF] to-white">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeader
          header="Products on ZET"
          subheader="We are trusted by best brand in the country"
        />
        <div className="grid sm:grid-cols-2 space-x-6 space-y-6 mx-auto p-2">
            {
                      products.map(product => (
                    <div key={product.id} className={` flex flex-col md:flex-row gap-4 rounded-sm border p-4 items-center hover:bg-white scale-95 hover:scale-105 duration-150 bg-[${product.bg}]`}>
                        <Image src={product.image} alt="" width={125} height={125} />
                        <div className="flex flex-col gap-2 justify-center items-center md:items-start">
                            <Typography variant="h5">{product.title}</Typography>
                            <Typography variant="normal">{product.description}</Typography>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Products;
