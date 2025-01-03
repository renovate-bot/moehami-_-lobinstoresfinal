interface StateShape {
  name: string;
  path: string;
}

// This is a sample of the states data structure
// The full data would include all 50 states with their SVG paths
export const statesData: StateShape[] = [
  {
    name: "Florida",
    path: "M759.8,439.1l2.6,7.6l2.2,9.2l4.3,9.8l4,5.8l4.3,3.7l3.9,2.3l4.8,1l3.8,5l3.7,5.5l4.9,3.6l4.2,1.5l2.8,4.5l-1.3,4.4 l-0.8,4.8l-0.3,4.7l2.8,4.6l2.8,4.6l2.7,3.1l3.2,3.6l-4.7-0.8l-4.1-0.6l-4.7-0.8l-5.1-0.4l-5.8,0.1l-5.8,0.5l-5.8,0.9l-5.7,1.2 l-5.6,1.6l-5.4,1.9l-5.2,2.3l-5,2.6l-4.7,3l-4.4,3.3l-4.1,3.7l-3.7,4l-0.8-0.5l-0.8-0.5l-0.8-0.5l-0.8-0.5l0.2-2.9l0.2-2.9 l0.2-2.9l0.2-2.9l-2.4-1.5l-2.4-1.5l-2.4-1.5l-2.4-1.5l-1.3-3.5l-1.3-3.5l-1.3-3.5l-1.3-3.5l-2.1-4.1l-2.1-4.1l-2.1-4.1l-2.1-4.1 l-1.3-4.7l-1.3-4.7l-1.3-4.7l-1.3-4.7l1.1-4.5l1.1-4.5l1.1-4.5l1.1-4.5l2.3-4.1l2.3-4.1l2.3-4.1l2.3-4.1l3.2-3.5l3.2-3.5 l3.2-3.5l3.2-3.5l3.7-2.8l3.7-2.8l3.7-2.8l3.7-2.8l4.1-2.1l4.1-2.1l4.1-2.1l4.1-2.1l4.3-1.3l4.3-1.3l4.3-1.3l4.3-1.3l4.4-0.5 l4.4-0.5l4.4-0.5l4.4-0.5l4.3,0.3l4.3,0.3l4.3,0.3l4.3,0.3l4,1.1l4,1.1l4,1.1L759.8,439.1z"
  },
  {
    name: "Texas",
    path: "M462.3,472.3l-2.8-1.1l-2.8-1.1l-2.8-1.1l-2.8-1.1l0.1-3.2l0.1-3.2l0.1-3.2l0.1-3.2l-1.7-2.7l-1.7-2.7 l-1.7-2.7l-1.7-2.7l-2.3-2.1l-2.3-2.1l-2.3-2.1l-2.3-2.1l-2.7-1.4l-2.7-1.4l-2.7-1.4l-2.7-1.4l-2.9-0.6l-2.9-0.6l-2.9-0.6 l-2.9-0.6l-2.8,0.2l-2.8,0.2l-2.8,0.2l-2.8,0.2l-2.5,1l-2.5,1l-2.5,1l-2.5,1l-2,1.7l-2,1.7l-2,1.7l-2,1.7l-1.3,2.3l-1.3,2.3 l-1.3,2.3l-1.3,2.3l-0.5,2.7l-0.5,2.7l-0.5,2.7l-0.5,2.7l0.4,2.8l0.4,2.8l0.4,2.8l0.4,2.8l1.2,2.7l1.2,2.7l1.2,2.7l1.2,2.7l2,2.3 l2,2.3l2,2.3l2,2.3l2.6,1.7l2.6,1.7l2.6,1.7l2.6,1.7l3,0.9l3,0.9l3,0.9l3,0.9l3.1,0.1l3.1,0.1l3.1,0.1l3.1,0.1l2.9-0.8l2.9-0.8 l2.9-0.8l2.9-0.8l2.5-1.6l2.5-1.6l2.5-1.6l2.5-1.6l1.9-2.2l1.9-2.2l1.9-2.2l1.9-2.2l1.1-2.7l1.1-2.7l1.1-2.7l1.1-2.7l0.2-2.9 l0.2-2.9l0.2-2.9l0.2-2.9l-0.7-2.8l-0.7-2.8l-0.7-2.8l-0.7-2.8l-1.5-2.5l-1.5-2.5l-1.5-2.5l-1.5-2.5l-2.2-2l-2.2-2l-2.2-2l-2.2-2 l-2.7-1.3l-2.7-1.3l-2.7-1.3l-2.7-1.3l-2.9-0.5l-2.9-0.5l-2.9-0.5l-2.9-0.5l-2.8,0.3l-2.8,0.3l-2.8,0.3l-2.8,0.3l-2.5,1.1 l-2.5,1.1l-2.5,1.1l-2.5,1.1l-1.9,1.8l-1.9,1.8l-1.9,1.8l-1.9,1.8l-1.2,2.4l-1.2,2.4l-1.2,2.4l-1.2,2.4l-0.4,2.7l-0.4,2.7 l-0.4,2.7l-0.4,2.7l0.5,2.8l0.5,2.8l0.5,2.8l0.5,2.8l1.3,2.6l1.3,2.6l1.3,2.6l1.3,2.6l2.1,2.2l2.1,2.2l2.1,2.2l2.1,2.2l2.7,1.6 l2.7,1.6l2.7,1.6l2.7,1.6l3,0.8l3,0.8l3,0.8l3,0.8l3.1,0l3.1,0l3.1,0l3.1,0l2.8-0.9l2.8-0.9l2.8-0.9l2.8-0.9l2.4-1.7l2.4-1.7 l2.4-1.7l2.4-1.7l1.8-2.3l1.8-2.3l1.8-2.3l1.8-2.3l1-2.7l1-2.7l1-2.7l1-2.7l0.1-2.9l0.1-2.9l0.1-2.9l0.1-2.9l-0.8-2.8l-0.8-2.8 l-0.8-2.8l-0.8-2.8l-1.6-2.4l-1.6-2.4l-1.6-2.4l-1.6-2.4l-2.3-1.9l-2.3-1.9l-2.3-1.9l-2.3-1.9l-2.8-1.2l-2.8-1.2l-2.8-1.2 l-2.8-1.2l-3-0.4l-3-0.4l-3-0.4l-3-0.4l-2.8,0.4l-2.8,0.4l-2.8,0.4l-2.8,0.4l-2.4,1.2l-2.4,1.2l-2.4,1.2l-2.4,1.2l-1.8,1.9 l-1.8,1.9l-1.8,1.9l-1.8,1.9l-1.1,2.4l-1.1,2.4l-1.1,2.4l-1.1,2.4l-0.3,2.8l-0.3,2.8l-0.3,2.8l-0.3,2.8l0.6,2.8l0.6,2.8l0.6,2.8 l0.6,2.8l1.4,2.6l1.4,2.6l1.4,2.6l1.4,2.6l2.2,2.1l2.2,2.1l2.2,2.1l2.2,2.1l2.7,1.5l2.7,1.5l2.7,1.5l2.7,1.5l3,0.7l3,0.7l3,0.7 l3,0.7l3.1-0.1l3.1-0.1l3.1-0.1l3.1-0.1l2.8-1l2.8-1l2.8-1l2.8-1l2.3-1.8l2.3-1.8l2.3-1.8l2.3-1.8l1.7-2.4l1.7-2.4l1.7-2.4 l1.7-2.4l0.9-2.7l0.9-2.7l0.9-2.7l0.9-2.7l0-2.9l0-2.9l0-2.9l0-2.9l-0.9-2.7l-0.9-2.7l-0.9-2.7l-0.9-2.7l-1.7-2.4l-1.7-2.4 l-1.7-2.4l-1.7-2.4l-2.4-1.8l-2.4-1.8l-2.4-1.8l-2.4-1.8l-2.8-1.1l-2.8-1.1l-2.8-1.1L462.3,472.3z"
  }
  // Add more states here...
];