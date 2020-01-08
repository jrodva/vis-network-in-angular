import { Component, OnInit } from '@angular/core';
import { Edge, Node, Network, DataSet } from 'vis-network/standalone';
import { graphEdges, graphNodes } from '../../assets/vis-data';

@Component({
  selector: 'app-custom-nodes',
  templateUrl: './custom-nodes.component.html',
  styleUrls: ['./custom-nodes.component.css']
})
export class CustomNodesComponent implements OnInit {

  network: Network;
  nodes: DataSet<Node>;
  edges: DataSet<Edge>;

  constructor() {
  }

  ngOnInit() {
    const layout = {
      hierarchical: {
        enabled: true,
        levelSeparation: 150,
        nodeSpacing: 110,
        treeSpacing: 200,
        blockShifting: true,
        edgeMinimization: true,
        parentCentralization: true,
        direction: 'UD'
      }
    };
    const manipulation = {
      enabled: false,
      initiallyActive: false,
      addNode: true,
      addEdge: true,
      editEdge: true,
      deleteNode: true,
      deleteEdge: true
    };
    const interaction = {
      navigationButtons: true
    };
    const options = {layout, manipulation, interaction};
    this.nodes = new DataSet<Node, 'id'>(graphNodes);
    this.edges = new DataSet<Edge, 'id'>(graphEdges);
    const container = document.getElementById('mynetwork-vis');
    const data = { nodes: this.nodes, edges: this.edges };
    this.network = new Network(container, data, options);
  }

  add() {
    const commonSize = 24;
    const commonBorder = 3;
    const commonShape = 'circularImage';
    const clusterImage = '/assets/images/cluster.svg';
    const clusterColor = {border: '#fff', background: '#000'};
    this.nodes.add({
      id: 2000,
      label: 'New node',
      font: {
        color: '#fff',
        size: 20,
        strokeWidth: 1,
        strokeColor: '#000'
      },
      level: 1,
      shape: commonShape,
      shapeProperties: {},
      image: clusterImage,
      size: commonSize,
      borderWidth: commonBorder,
      borderWidthSelected: commonBorder,
      color: clusterColor
    });
    this.edges.add({from: 2000, to: 2,  color: {color: '#ff00ff'}});
  }

}
