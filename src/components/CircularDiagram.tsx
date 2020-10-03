import { Component } from "react";
import React from 'react'
import * as d3 from 'd3'
import { Surface, Group, Shape } from '@react-native-community/art'
import { View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";


export default class CircularDiagram extends Component {
    private width = 200;
    private height = 200;
    private radius = this.width /2;
    render() {
        const datas = [
            {
              itemName: 'Don',
              value: 40,
              color: 'blue',
            },
            {
              itemName: 'Stick',
              value: 60,
              color: 'green',
            }
        ]
        const sectionAngles = d3.pie().value(d => d.value)(datas)
        const path = d3.arc()
            .outerRadius(this.radius * 0.9)
            .padAngle(.05) 
            .innerRadius(2);
        
        const textPath = d3.arc()
            .outerRadius(this.radius)
            .innerRadius(0);

        const colors=['rgba(50, 255, 50, 0.7)', 'rgba(50, 50, 255, 0.7)']
        return (
            <Layout style={{alignItems: 'center', justifyContent:'center'}}>
                <Layout>
                    <Surface width={this.width} height={this.height}>
                        <Group x={this.width/2} y={this.height/2}>
                            {
                                sectionAngles.map((section) => (
                                    <Group>
                                        <Shape
                                            key={section.index}
                                            d={path(section)}
                                            stroke="#000"
                                            fill={colors[section.index]}
                                            strokeWidth={1}
                                        />
                                    </Group>
                                ))
                            } 
                        </Group>
                    </Surface>
                </Layout>
                <Layout style={{flexDirection: 'row', marginTop:25, marginBottom:15}}>
                    <Layout style={{width:'50%', flexDirection: 'row', justifyContent:'center'}}>
                        <View style={{backgroundColor:colors[1], width:30, height:30, marginRight:15}}></View>
                        <Text>40% Don</Text>
                    </Layout>
                    <Layout style={{width:'50%', flexDirection: 'row', justifyContent:'center'}}>
                        <View style={{backgroundColor:colors[0], width:30, height:30, marginRight:15}}></View>
                        <Text>60% Stick</Text>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}