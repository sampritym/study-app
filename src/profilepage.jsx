import React from 'react'
import ProfileCard from './ProfileCard/pcard'
import profilephoto from "./assets/profilephoto.png"
import UserPost from './PostCard/postcard'
import data from './data'
import NewPost from './NewPost/Newpost'



function ProfilePage() {

    const posts= data.map(item => {
        return (
            <UserPost 
              profilephoto={item.profilephoto}
              postname={item.postname}
                post={item.post}
                
            />
        )
    })        

    return (
      <>
       
        <ProfileCard

        profilephoto={profilephoto}
        name="This is my name"
        about="This is my about.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corporis neque illum eum omnis quis inventore iusto cupiditate? Reiciendis provident sed iste sapiente, necessitatibus nesciunt unde laudantium natus expedita pariatur!"
       
        />
        <NewPost/>
        {posts}
        
      
        
      </>
    )
  }
  
  export default ProfilePage
  