import { Layout, } from "@ui-kitten/components";
import {UpdateDescription } from "./UpdateDescription"
import React from "react";


interface BoughtUpdateProps {
    title: string,
    price: number,
    description: string
}


export default class BoughtUpdate extends React.Component<BoughtUpdateProps>{
    render() {
        return (
            <Layout>
                <UpdateDescription {...this.props} onlyText={true}/>
            </Layout> 
        )
    }
}