"use client";

// import Head from "next/head";
import { useEffect, useState } from "react";

import Table from "@/components/Table";
import { getTables, getSettings } from "@/sanity/sanity-utils";
import { TableInterface, SettingsInterface } from "@/types";
// import { Metadata } from "next";

export default function Home() {
  const [data, setData] = useState<TableInterface[]>([]);
  // const [metadata, setMetadata] = useState<SettingsInterface>({
  //   _id: "string",
  //   title: "Loading...",
  //   description: "Loading...",
  // });

  useEffect(() => {
    async function fun() {
      const tablesData = await getTables();
      // const settingsData = await getSettings();
      setData(tablesData);
      // setMetadata(settingsData[0]);
    }
    fun();
  }, []);

  if (data.length === 0) return <div>Loading...</div>;

  return (
    <>
      {/* <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head> */}
      <div className="d-flex flex-col space-y-8 px-15 pt-10">
        {data?.map((table) => (
          <Table key={table._id} data={table} />
        ))}
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const tablesData = await getTables();
//   const settingsData = await getSettings();
//   return {
//     props: {
//       tablesData,
//       settingsData,
//     },
//   };
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const settingsData = await getSettings();

//   return {
//     title: settingsData[0].title,
//     description: settingsData[0].description,
//   };
// }
