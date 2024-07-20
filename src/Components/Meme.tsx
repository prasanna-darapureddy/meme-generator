import { Box, Button, Typography } from '@mui/material';
import { styles } from './MemeStyles';
import { Settings } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';

interface IState {
    firstState: string;
    imageUrl: string;
    size: number;
    imagesList: {
        id: number;
        name: string;
        url: string;
        width: number;
        height: number;
        box_count: number;
        captions: number;
    }[],
}

function Meme() {
    const [firstText, setfirstText] = useState<IState['firstState']>('')
    const [secondText, setsecondText] = useState<IState['firstState']>('')
    const [imageUrl, setImageUrl] = useState<IState['imageUrl']>('')
    const [text1FontSize, set1FontSize] = useState<IState['size']>(30);
    const [text2FontSize, set2FontSize] = useState<IState['size']>(30);
    const [width, setWidth] = useState<IState['size']>(150);
    const [imagesList, setImagesList] = useState<IState['imagesList']>([]);
    const Iref = useRef()

    const onChangeFirstText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setfirstText(e.target.value)
        if (firstText.length >= 20 && width >= 100) {
            set1FontSize(text1FontSize => text1FontSize - 0.3)
            setWidth(150)
        } else {
            set1FontSize(30);
            setWidth(150)
        }
    }

    const onChangeSecondText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setsecondText(e.target.value)
        if (secondText.length >= 20 && width >= 100) {
            set2FontSize(text2FontSize => text2FontSize - 0.3)
            setWidth(150)
            console.log(text2FontSize)
        } else {
            set2FontSize(30);
            setWidth(150)
        }
    }

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.imgflip.com/get_memes')
            const data = await response.json()
            setImagesList(data.data.memes)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData();
    }, [imagesList])

    const onUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const url: File = (event.target.files as FileList)[0];
        url && setImageUrl(URL.createObjectURL(url))
    }

    const onSelectImage = (url: string) => {
        setImageUrl(url)
    }

    const onClickGenerate = () => {
        imageUrl === '' && alert("Please upload a image")
        imageUrl && Iref.current &&
            html2canvas(Iref.current, { useCORS: true })
                .then((canvas) => {
                    const link = document.createElement('a');
                    link.download = 'meme.png';
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                });
        setfirstText('')
        setsecondText('')
    }


    return (
        <Box sx={styles.home_container}>
            <Typography sx={styles.title}>Meme Generator</Typography>
            <Box sx={styles.meme_page}>
                <Box sx={styles.left_container}>
                    {imageUrl &&
                        <Box sx={{ ...styles.meme_img, backgroundImage: `url(${imageUrl})` }} ref={Iref} >
                            <Box sx={styles.output_container}>
                                <Box component={'p'} draggable={true} sx={{ ...styles.first_text, fontSize: `${text1FontSize}px`, maxWidth: `${width}px` }}>{firstText}</Box>
                                <Box component={'p'} sx={{ ...styles.second_text, fontSize: `${text2FontSize}px`, maxWidth: `${width}px` }}>{secondText}</Box>
                            </Box>
                        </Box>}

                    <Box sx={styles.upload_button_container}>
                        <Box component={'label'} htmlFor='upload' sx={styles.upload_button}>Upload Image</Box>
                        <Box component={'input'} type='file' id='upload' onChange={onUploadFile} display={'none'} visibility='hidden' />
                    </Box>
                </Box>

                {imageUrl === '' ? null :
                    <Box sx={styles.right_container}>
                        <Box sx={styles.images_container}>
                            {imagesList.map(eachMeme =>
                                <Box component={'img'} src={eachMeme.url} sx={styles.array_images} onClick={() => onSelectImage(eachMeme.url)} />
                            )}
                        </Box>
                        <Box sx={styles.input_container}>
                            <Box component={'input'} type='text' placeholder='Text #1' value={firstText} onChange={onChangeFirstText} sx={styles.user_input} />
                            <Box sx={styles.icons_container}>
                                <Box component={'input'} type='color' sx={styles.color_inputs} />
                                <Box component={'input'} type='color' value={'#ffffff'} sx={styles.color_inputs} />
                                <Settings />
                            </Box>
                        </Box>
                        <Box sx={styles.input_container}>
                            <Box component={'input'} type='text' placeholder='Text #2' value={secondText} onChange={onChangeSecondText} sx={styles.user_input} />
                            <Box sx={styles.icons_container}>
                                <Box component={'input'} type='color' sx={styles.color_inputs} />
                                <Box component={'input'} type='color' value={'#ffffff'} sx={styles.color_inputs} />
                                <Settings />
                            </Box>
                        </Box>
                        <Button variant='contained' sx={styles.generate_button} onClick={onClickGenerate} >Generate Meme</Button>
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default Meme




{/* {imageUrl && <Box component={'img'} src={imageUrl} alt='meme image' sx={styles.meme_img}/>} */ }