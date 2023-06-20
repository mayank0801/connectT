import React, { useState } from 'react'
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import {FiMoreHorizontal} from "react-icons/fi";
import { bookmark, dislikeHandler, likePostHandler, removeBookMark } from '../../services/postServices';
import { isBookMark, isLiked } from '../../utlis/utlis';
import { PostOption } from './features/PostOption';
import { Center } from '@chakra-ui/react';
import {BsBookmarks,BsBookmarksFill} from "react-icons/bs"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const TweetCard = ({post,userInfo,token,dispatch}) => {
    const {
    _id,
    content,
    createdAt,
    likes,
    username
    }=post;
    const [isOpenModal,setIsOpen]=useState(false);
    const {updateBookMark,userBookMark}=useContext(AuthContext);
    console.log(userBookMark,"userBookMark");
  return (
    <div className='tweetCard'>
      <div style={{display:'flex',alignItems:"center",justifyContent:'space-between',position:"relative"}}>
        <h4>{username}</h4>
        <FiMoreHorizontal onClick={()=>setIsOpen(!isOpenModal)}></FiMoreHorizontal>  
        <div className='postOptions' style={{position:'absolute',top:"60%",bottom:0,right:0,backgroundColor:'white',color:'black',boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
        {
          isOpenModal&&<PostOption 
          post={post}
          userInfo={userInfo}
          />
        }
        </div>
        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        <p style={{overflow:"hidden",textOverflow: "ellipsis", whiteSpace: "nowrap", width: "200px"}}>
          
          {isLiked(likes,userInfo.username)?<AiFillHeart color='red' onClick={()=>dislikeHandler(_id,token,dispatch)}/>:<AiOutlineHeart onClick={()=>likePostHandler(_id,token,dispatch)}/>}
          {isBookMark(userBookMark,post._id)?<BsBookmarksFill onClick={()=>removeBookMark(post._id,token,updateBookMark)}/>:<BsBookmarks onClick={()=>bookmark(post._id,token,updateBookMark)}/>}
       {content}  
        </p>
    </div>
  )
}
