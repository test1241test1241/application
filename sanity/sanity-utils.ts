import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { TableInterface, SettingsInterface } from "@/types";

export async function getTables(): Promise<TableInterface[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "table"]{
    _id,
    title,
    headers,
    splitter,
    content
  }`);
}

export async function getSettings(): Promise<SettingsInterface[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "settings"]{
    _id,
    title,
    description
  }`);
}
