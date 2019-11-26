const locationCollection = [
  {
      place: "Carribean",
      latlong: "14.5401° N, 74.9676° W",
      image: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828152.282790463!2d-83.80766612817045!3d14.41015089361764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMyJzI0LjQiTiA3NMKwNTgnMDMuNCJX!5e0!3m2!1sen!2sus!4v1574712616924!5m2!1sen!2sus",
      alt: "Carribean Map"
  },
  {
      place: "American_East_Coast",
      latlong: "42.9847° N, 67.8593°  W",
      image: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988752.666363276!2d-70.08027188560273!3d42.98451326071101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDU5JzA0LjkiTiA2N8KwNTEnMzMuNSJX!5e0!3m2!1sen!2sus!4v1574781123047!5m2!1sen!2sus",
      alt: "American East Coast Map"
  },
  {
      place: "Bikini_Bottom",
      latlong: "7.1315° N, 171.1845° E",
      image: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.952425380912!2d171.18231131461894!3d7.131499994850377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnNTMuNCJOIDE3McKwMTEnMDQuMiJF!5e0!3m2!1sen!2sus!4v1574713872279!5m2!1sen!2sus",
      alt: "Bikini Bottom Map"
  },
  {
      place: "Indian_Ocean",
      latlong: "25°08' S, 63° 49'E",
      image:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29501364.569753733!2d45.81234630084038!3d-25.497014763740736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA4JzAwLjAiUyA2M8KwNDknMDAuMCJF!5e0!3m2!1sen!2sus!4v1574780752866!5m2!1sen!2sus",
      alt: "Indian Ocean Map"
  },
  {
      place: "In_The_Ocean",
      latlong: "???",
      image: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48593459.34788809!2d47.85456239866824!3d-41.98075528123327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA4JzAwLjAiUyA4M8KwNDknMDAuMCJF!5e0!3m2!1sen!2sus!4v1574780978460!5m2!1sen!2sus",
      alt: "Somewhere in the Ocean Map"
  },
  {
      place: "Captain_D's",
      latlong: "36.0947° N, 86.7374° W",
      image: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.9502819562917!2d-86.73958868485616!3d36.0946999800999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA1JzQwLjkiTiA4NsKwNDQnMTQuNiJX!5e0!3m2!1sen!2sus!4v1574781019089!5m2!1sen!2sus",
      alt: "Captain D's Map"
  },


]

export const useLocation = () => {
  return locationCollection
}
