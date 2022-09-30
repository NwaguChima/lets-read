import React, { useMemo } from 'react'

// const column = [
//     {
//         Header: "Name",
//         accessor: 'name',

//     },
//     {
//         Header: "Email",
//         accessor: 'email',
//     },
//     {
//         Header: "Address",
//         accessor: 'address',
//     },
//     {
//         Header: "Phone",
//         accessor: 'phone',
//     },
//     {
//         Header: "Website",
//         accessor: 'website',
//     },
//     {
//         Header: "Company",
//         accessor: 'companyName',
//     },

// ]

    // eslint-disable-next-line react-hooks/rules-of-hooks
 export const columns =  [
     {
       Header: "Name",
       accessor: "name",
     },
     {
       Header: "Email",
       accessor: "email",
     },
     {
       Header: "Address",
       accessor: "address",
     },
    
     {
       Header: "Website",
       accessor: "website",
     },
     {
       Header: "Company",
       accessor: "company",
     },
   ]

 

    // useMemo(() =>  column ,[])