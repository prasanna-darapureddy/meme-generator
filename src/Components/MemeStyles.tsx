export const styles = {
    home_container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding:'30px',
    },
    title:{
        fontSize: {xs: '16px', sm:'20px', md:'25px', lg:'35px'},
    },
    meme_page:{
        display:'flex',
        flexDirection:{xs: 'column', sm: 'column', md:'row'},
        justifyContent: 'center',
        padding:'40px',
    },
    left_container:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        marginRight: '15px',
        marginBottom: '40px',
        width:'100%',
        height:'500px',  
    },
    meme_img:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        border:'1px solid #c8c8c8',
        height: '100%',
        width:{xs:'250px', sm:'500px'},
    },
    output_container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        height: '80%',
        marginLeft:'0px'
    },
    first_text:{
        wordWrap: 'break-word',     
        maxWidth: '180px',  
        color:{xs:'#fff', sm:'red'},
        paddingLeft:'0px',
        paddingRight:'30px',
    },
    second_text:{
        wordWrap: 'break-word',      
        maxWidth: '180px',  
        color:{xs:'#fff', sm:'red'},
        paddingLeft:'0px',
        paddingRight:'30px',
    },
    upload_button_container:{
        alignSelf: 'center',
    },   
    upload_button:{
        backgroundColor:'#1976D2',
        border: 'none',
        color:'#ffffff',
        padding: '10px',
        borderRadius:'8px',
        cursor:'pointer',
        alignSelf:'center',
    },
    right_container:{
        display:'flex',
        flexDirection:{xs: 'column'},
        marginLeft: '10px',
        padding: '10px',
        gap: 4,
    },
    input_container:{
        display:'flex',
        justifyContent: 'space-between',
        border:'1px solid #c8c8c8',
    },
 
    user_input:{
        outline:'none',
        border:'none',
        padding: '10px',
        width:'100%',
    },
   
    icons_container:{
        display:'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor:'#cccccc',
        padding:'8px',
    },
    color_inputs:{
        outline:'none',
        border: 'none',
        width:'25px',
        borderRadius: '8px',
        backgroundColor:'transparent',        
    },
    generate_button:{
        alignSelf: 'flex-start',
    },
    images_container:{
        display:'flex',
        overflowX: 'scroll',
        visibility: 'scroll',
        width:{xs:'300px', sm:'500px'},
    },
    array_images:{
        height:'100px',
        width:'100px',
        margin: '2px',
    }
}







// output_container:{
//     position:'absolute',
//     left:{xs: '20%', sm:'50%', md:'70%'},
//     bottom:{xs: '20%', sm:'50%', md:'70%'},
// }

// first_text:{
//     position:'fixed',
//     left:{xs: '33%', sm:'33%', md:'33%'},
//     bottom:{xs: '20%', sm:'80%', md:'62%'},
// }

// second_text:{
//     position:'fixed',
//     left:{xs: '10%', sm:'50%', md:'33%'},
//     bottom:{xs: '7%', sm:'70%', md:'25%'},
// }