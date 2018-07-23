import React from 'react';
import PropTypes from 'prop-types';




/*

export default class Hello extends React.Component {
	render() {
	    return (
	        <div>Hello!</div>
	    );
	}
}

*/

export default class StringAvatar extends React.Component {

    renderImage() {

        /*
 
        var _long = 45,
            _picture_resolution = 256,
            _wrapper = true,
            _str = "", //scope.initials || "",
            _bgColor = "#000",
            _textcolor = "#fff",
            _pixelated = false,
            _img_styling = { verticalAlign: 'top' },
            _roundShape = false,
            _wrapper_styling = "border-radius:0; display:block; overflow:hidden;",
            _extra_classes = "",
            _extra_img_classes = "",
            _extra_styles = "",
            _corner_radius = "0",
            _picture_format = "png",
            _colors_palette = ["#bdc3c7","#6f7b87","#2c3e50","#2f3193","#662d91","#922790","#ec2176","#ed1c24","#f36622","#f8941e","#fab70f","#fdde00","#d1d219","#8ec73f","#00a650","#00aa9c","#00adef","#0081cd","#005bab"],
            _autoColor = false,
            _font_weight = 100,
            _font_scale = 100,
            _text_shadow = false,
            _bind = false,
            _img_width = "100%",
            _upperCase = false;


        // -----------------------------
        // utility functions
        // -----------------------------

        function generateAvatar(name, w, h, bgColor, textcolor, bgImage) {

            var WIDTH = 256,
                HEIGHT = 256,
                canvas,
                ctx,
                font_size;

            console.log("w:", w);
            console.log("h:", h);
            console.log("name:", name);

            if (w != undefined && w > 0) {
                if (h != undefined && h > 0) {
                    WIDTH = w;
                    HEIGHT = h;
                }
            }

            canvas = document.createElement('canvas');
            canvas.id = "ngAvatar-" + Date.now();
            canvas.width = WIDTH;
            canvas.height = HEIGHT;

            ctx = canvas.getContext('2d');
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, WIDTH, HEIGHT);

            var _default = {
                fontWeight: 100,
                fontScale: 100,
                pictureFormat: "png"
            };

            var str = getInitialsFromString(name); //"Try This!");

            console.log("str:", str);

            font_size = WIDTH / (2 / (_default.fontScale / 100));

            console.log("font_size:", font_size);

            ctx.font = _default.fontWeight + " " + font_size + "px sans-serif";

            if (_default.textShadow === true) {
                ctx.shadowColor = "black";
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 5;
            }

            ctx.textAlign = "center";
            ctx.fillStyle = "#fff";
            ctx.fillText(str, WIDTH / 2, HEIGHT - (HEIGHT / 2) + (font_size / 3));

            return canvas.toDataURL("image/" + _default.pictureFormat);
        }

        function getInitialsFromString(str) {

            console.log("str:", str );

            if (!str) return ""

            var output = "",
                i = 0,
                str = str.split(" "),
                len = str.length;

            for (i; i < len; i++) if (str[i] != "") output += str[i][0]; //.toUpperCase();

            return output;
        }

        // -----------------------------
        // checkValues
        // -----------------------------
        
        console.log("this.props:", this.props);

        
        // Create text to be shown
        
        if (this.props.initials != undefined) {
            _str = this.props.initials;
        }
 
        if (this.props.string != undefined) {
            _str = getInitialsFromString( this.props.string );
        }


        // Calculate color

        if (this.props.bgColor != undefined) {
            _bgColor = this.props.bgColor;
        } else {

            if (this.props.autoColor != undefined) {

                _autoColor = this.props.autoColor;
                if ( _autoColor === true ) {
                    var i, lon = _str.length, charIndex=0,colorIndex;
                    for(i=0; i<lon;i++) charIndex = _str.charCodeAt(i);
                    colorIndex = charIndex % _colors_palette.length;
                    _bgColor = _colors_palette[ colorIndex ];
                }
            }                     
        }

        // --------------------------
        // Create the image here
        // --------------------------

        var imgData = generateAvatar(
            _str,
            this.props.pictureResolution,
            this.props.pictureResolution,
            _bgColor, //this.props.bgColor,
            this.props.textcolor,
            null
        );

        */

        return null

        //return imgData

        /*

        // ------------------------------------------
        // Create HTML and styles wraping the image
        // ------------------------------------------

        var _img_styling = { imageRendering: 'pixelated', imageRendering: '-moz-crisp-edges' };

        var _pixelated = this.props.pixelated;
        if ( _pixelated === true ) { 
            _img_styling.imageRendering = "pixelated"; 
            //_img_styling.imageRendering = "-moz-crisp-edges";
        }

        var _wrapper_styling = { overflow: 'hidden', width: this.props.width, height: this.props.width }; //borderRadius: this.props.width +'px', 

        if (this.props.roundShape != undefined) {
            console.log("1");
            _roundShape = this.props.roundShape;
            if ( _roundShape ) {
                console.log("2");
                _wrapper_styling.borderRadius = this.props.width +"px";
            }
        } else {
            console.log("3");
            if ( this.props.cornerRadius != undefined ){
                console.log("4");
                _corner_radius = this.props.cornerRadius;
                _wrapper_styling.borderRadius = _corner_radius +"px";
            }
        }

        // <div contentEditable='true' dangerouslySetInnerHTML={{ __html: "Hello" }}></div>

        //return ( <img src={imgData} style={ _img_styling} width={this.props.width} height="" /> )

        // var imgHtml = <img src={imgData} style={ _img_styling} width={this.props.width} height="" />

        // if ( this.props.wrapper ) {
        //     return <div className="avatar-wrapper " style={ _wrapper_styling } >{ imgHtml }</div>
        // } else {
        //     return imgHtml
        // }

        

        console.log("imgData:", imgData );

        var imgHtml = <Image src={imgData} style={ _img_styling} width={this.props.width} height="" />

        return imgHtml

        */
        

    } //this.props.renderImage ends here.

    // render() { 
    //     return this.renderImage();
    // }

    render() { 

        //const imgHtml = <div></div> //( <img src={ this.renderImage() } style={ _img_styling} width={this.props.width} height="" /> ) 
       
        //return this.renderImage()

        //return ( <img src={ this.renderImage() } width={this.props.width} /> )

        //return <img src="" width={this.props.width} />
        
        //return (<div>A</div>)

        var imgHtml ='';

        var _wrapper_styling = '';

        if ( this.props.wrapper ) {

            return null

            /*
            return ( <div>
                  hello!
                </div>
              );
            */

            //return ( <div className="avatar-wrapper" style={ _wrapper_styling } >{ imgHtml }</div> )
        } else {
            return null //imgHtml
        }

    }

}


StringAvatar.propTypes = {

    /*
    initials: PropTypes.string,
    //width: PropTypes.string,
    wrapper: PropTypes.bool,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    pictureResolution: PropTypes.number,
    width: PropTypes.number,
    pixelated: PropTypes.bool,
    roundShape: PropTypes.bool,
    //class: PropTypes.string, //*
    //imgClass: PropTypes.string, //*
    //style: PropTypes.string, //*
    string: PropTypes.string, //*
    cornerRadius: PropTypes.string,
    pictureFormat: PropTypes.string,
    colorsPalette: PropTypes.array,
    autoColor: PropTypes.bool,
    fontWeight: PropTypes.number,
    fontScale: PropTypes.number,
    textShadow: PropTypes.bool,
    bind: PropTypes.bool,
    //maxLength: PropTypes.string, //*
    upperCase: PropTypes.bool
    */

};

StringAvatar.defaultProps = {

    /*
    initials: null,
    wrapper: true,
    bgColor: "#000",
    textcolor: "#fff",
    pictureResolution: 50, //256,
    width: 60,
    pixelated: false,
    //imgStyling: "vertical-align:top;",
    roundShape: false,
    //wrapper_styling: "border-radius:0; display:block; overflow:hidden;",
    //extraClasses: "",
    //extraImgClasses: "",
    //extraStyles: "",
    string: null,
    cornerRadius: "0",
    pictureFormat: "png",
    colorsPalette: ["#bdc3c7", "#6f7b87", "#2c3e50", "#2f3193", "#662d91", "#922790", "#ec2176", "#ed1c24", "#f36622", "#f8941e", "#fab70f", "#fdde00", "#d1d219", "#8ec73f", "#00a650", "#00aa9c", "#00adef", "#0081cd", "#005bab"],
    autoColor: false,
    fontWeight: 100,
    fontScale: 100,
    textShadow: false,
    bind: false,
    //imgWidth: "100%",
    upperCase: false
    */
};

//export default StringAvatar;