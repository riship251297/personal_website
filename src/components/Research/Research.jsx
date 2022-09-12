import React from "react";
import Navbar from "../Navbar/Navbar";
import '../Navbar/Navbar.css';
import '../Research/Research.css'

function Research()
{
    return(
        <>
           <div>
               <Navbar/>
               <h3 className="opo">DEEP LEARNING AND BIOINFORMATICS </h3>
               <br></br>
                <h5 className="edit">Research funded by National Institute of Health Sciences, US</h5>


               <div className="main">

                    <div className="first">
                        <ul>
                            <br></br>
                            <h3 className="pop">Quality Evaluation of Shared Datasets :</h3>
                            <ol>
                                <div className="first-second">
                                    <li>This research project is supervised by Dr. James Wang, and is in collaboration with neuroscience experts  Dr. Mark Eckert and Dr. Kenny Vaden, 
                                    from Medical University of South Carolina.&nbsp;When a participant's data is collected and stored, &nbsp;protecting their personal privacy 
                                    is critical because protecting such individuals' interests is important. This data is an essential component of academic research and 
                                    this data sharing with other researchers facilitates research to a greater extent, because of which before storing the subject's data, 
                                    they need to be de-identified. 
                                    </li>
                                    <li>Tools like DeId toolbox uses FSL BET to remove the facial features and allows users to review deidentified images
                                    at different orientations. A DeID toolbox is an effective tool for removing facial features from 3D MRI datasets
                                    and identifying features from behavior and other datasets.&nbsp;However, in the process of eliminating facial
                                    identification features there is a possibility that the tool will remove the brain tissues, as well as the image voxels
                                    that represent the brain tissues. This can have an impact on the dataset as well as on the future research.
                                    </li> 
                                    <li>Hence, it is of utmost priority that we ensure the image quality aspects of the uploaded
                                    images by protecting the user privacy as well as by maintaining the full brain tissue voxels. To ensure datasets
                                    uploaded do not have voxels representing facial features and at the same time voxels representing the brain do
                                    not get removed, <mark>a Quality Evaluation model using deep learning model is developed and integrated into the
                                    consortium. This quality evaluation model is a convolutional neural network that predicts the presence of facial
                                    features and brain voxel tissues in the uploaded images.</mark>
                                    </li>
                                    <li>We trained two CNN models to predict the presence of brain tissue and facial features.  
                                    The training dataset consists of images processed from IXI T1 images. First step in the dataset generation for training is 
                                    the removal of facial features from the MRI images using different de-identification tools. For the de-identification of the 
                                    image, we set a different value in the Brain Extraction Tool (BET) and Brain Surface Extractor (BSE) tool and run it to collect 
                                    extracted datasets from each tool. Once facial feature removal is complete, we label the training dataset as having facial 
                                    features or not and having a brain image not. </li>
                                    
                                    <li>To label the dataset we created a web page where we presented the 2D projections 
                                    of the 3D MRI image from all sides to the users. Users can observe the images and then decide the presence of brain tissues and 
                                    facial features. Users can then click on the "yes" or "no" button to vote about their decision. The decision that gets the 
                                    maximum number of votes is the final label of the dataset.</li>

                                    <li>We conducted a survey for all of the 2061 generated images in our study group, which also included domain experts,
                                    and each member voted on each image while taking into account whether or not the image had additional brain tissues 
                                    removed and whether or not all facial features had been removed.&nbsp;All of the images are of the shape (256, 256, 150), 
                                    which is a three-dimensional array. However, in order to determine whether facial features have been deleted or extra 
                                    brain tissues have been removed, we must only look at the surface of the brain and not inside. We decided to use a 
                                    2D-projection of the brain from four sides, namely the front, left, right, and top. We extracted these images using a 
                                    method inspired by the marching cubes algorithm.</li>

                                    <div className="first-first">
                                        <center><img src={"images/uploaded.png"} className="img-circled"width="1000px"height="400px"alt=''/></center>
                                        <center><h4 className="shiv"> Fig : 2D projections of an MRI image</h4></center>
                                    </div>

                                    <li>Our intuition is that these projections will provide a comprehensive representation of the MRI 
                                    image's external surface, as the voxels of the scan in the internal portions of the brain are 
                                    unnecessary features that we do not want to include.&nbsp; The final labels were then chosen by tallying up all of the votes. This provided us with 
                                    a reliable dataset on which we we can build our two Convolutional Neural Network (CNN) models which 
                                    can address our problem statement.
                                    </li>

                                    <div className="lll">
                                        <div className="ll">
                                            <h4 className="plp"> FSL BET generated images </h4>
                                            <h4 className="opol"> Face and brain tissue probability by model</h4>
                                        </div>
                                        <div className="io">
                                            <img src={"images/rishi_0.2.png"} className="img-circled"width="900px"height="400px"alt=''/>
                                            <h4>0.8 and 0.3</h4>
                                        </div>
                                        <div className="uo">
                                            <img src={"images/rishi_0.3.png"} className="img-circled"width="900px"height="400px"alt=''/>
                                            <h4>0.35 and 0.2</h4>
                                        </div>
                                        <div className="yo">
                                            <img src={"images/rishi_0.4.png"} className="img-circled"width="900px"height="400px"alt=''/>   
                                            <h4>0.17 and 0.12</h4>
                                        </div>
                                      
                                    </div>
                                </div>
                            </ol>
                        </ul>
                    </div>
                    <hr></hr>
                    <br>
                    </br>
                <div className="dysl">
                    <h3 className="pop">Dyslexia Data Consortium : <a href="https://dyslexia.computing.clemson.edu/dashboard/">Link to the Consortium</a></h3>
                    <ol>
                        <div className="first-second">
                            <li>Dyslexia Data Consortium, is a web-based platform for dyslexia data sharing and research collaboration. 
                                With this platform, researchers can share dyslexia datasets and research methods to address 
                                fundamental questions about dyslexia, replicate research findings, disseminate new ideas to process and 
                                analyze dyslexia datasets, and educate the next generation of dyslexia researchers.
                            </li>
                            <li>
                            This platform also establishes new methods to compute and provide researchers with brain morphology measures, 
                            such as gray matter images, white matter images, brain volumes, etc., by exploiting massive parallel computation
                             with Clemson University's Palmetto supercomputer, and stores these datasets and computed morphological metrics 
                             in BIDS compliant format, resolving the issues related to the data heterogeneity.One of the primary purposes of 
                             developing a Dyslexia Data Consortium is to promote data sharing and research collaboration.
                            </li>
                            
                            <li>Different types of secondary datasets generated include :  <br></br>a) Native Space Gray/White Matter Image <br></br>b) Forward and Inverse Warped Image
                            <br></br>c) Modulated and Normalized Gray/White Matter Image <br></br>d) Normalized Bias Field Corrected Image and Surface data. <br></br>

                            </li>
                            <li>Native space image is the image in original space, i.e., not transformed by some registration or normalization function. Native Space analysis gives an 
                            alternative to spatial normalization and smoothing steps in studies to analyze the white matter and the gray matter. 
                            Warped images are manipulated images such that structures or shapes in an image are distorted to fit similar but different-sized 
                            shapes in a template image.</li>

                            <li>Spatial normalized images are deformed images that makes it possible for a location in the brain image of 
                            a subject map to the exact location in the brain image of a different subject. Bias field corrected images are images that remove bias 
                            field and correction of data corruption due to bias field using technique called bias field correction is used.
                            Dyslexia data consortium also provides data such as left central thickness, left spherical thickness, etc.,
                            for all the uploaded MRI images. All these datasets are available for users to download.
                            </li>
                        </div>
                    </ol>
                </div>
               </div>
           </div>
           <div className='footer'>
      
      </div>
        </>
    );
}

export default Research;