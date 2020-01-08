import { Component, OnInit } from '@angular/core';
import { Edge, Node, DataSet, Network } from "vis-network/standalone";
import { graphEdges, graphNodes } from '../../assets/vis-data';

@Component({
  selector: 'app-custom-nodes',
  templateUrl: './custom-nodes.component.html',
  styleUrls: ['./custom-nodes.component.css']
})
export class CustomNodesComponent implements OnInit {

  network: Network;
  nodes: Node;
  edges: Edge;

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
    this.nodes = new DataSet(graphNodes);
    this.edges = new DataSet(graphEdges);
    const container = document.getElementById('mynetwork-vis');
    const data = { nodes: this.nodes, edges: this.edges };
    this.network = new Network(container, data, options);
  }

}
