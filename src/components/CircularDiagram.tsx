import { Component } from "react";
import React from 'react'
import * as d3 from 'd3'
import { Surface, Group, Shape, Text } from '@react-native-community/art'
import { Dimensions } from "react-native";
import { local } from "d3";


export default class CircularDiagram extends Component {
    private width = 200;
    private height = 200;
    private radius = this.width /2;
    render() {
        const userPurchases = [
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
        const sectionAngles = d3.pie().value(d => d.value)(userPurchases)
        const path = d3.arc()
            .outerRadius(this.radius * 0.9)
            .padAngle(.05) 
            .innerRadius(2);
        
        const textPath = d3.arc()
            .outerRadius(this.radius)
            .innerRadius(0);

        const colors=['rgba(50, 50, 255, 0.7)','rgba(50, 255, 50, 0.7)']
        return (
            <Surface width={this.width} height={this.height + 40}>
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
                <Group y={this.height}>
                    {
                        sectionAngles.map((section) => (
                            <Text 
                                key={section.itemName}
                                fill="black"
                                strokeWidth={90}
                                scale={4}
                                x={100 * section.index}
                                y={10}
                            >
                                {section.value} % {section.itemName}
                            </Text>
                        ))
                    } 
                </Group>
            </Surface>
        )
    }
}