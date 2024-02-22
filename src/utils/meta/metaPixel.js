import { Helmet } from "react-helmet";

const MetaPixel = () => {
    return (
      <Helmet>
        <script id="facebook-pixel-script">
        {
          `YOUR_FUNCTION`
        }</script>
        <noscript id="facebook-pixel-image">
        {
          `YOUR_IMAGE`
        }</noscript>
      </Helmet>
    );
  };
  
  export default MetaPixel;


  