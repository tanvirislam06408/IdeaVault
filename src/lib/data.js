'use server'
export const getFeaturedIdeas=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/featured-ideas`);
    const data=await res.json();
    
    return data;
}

export const getIdeas=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/ideas`);
    const data=await res.json();
    
    return data;
}
export const getUserIdeas=async(user_id)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/userIdea/${user_id}`);
    const data=await res.json();
    
    return data;
}

export const getIdeaById=async(id)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/ideas/${id}`);
    const data=await res.json();
    
    return data;
}

export const getComments=async(id)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/comments/${id}`);
    const data=await res.json();
    
    return data;
}

export const deleteComment=async(id)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/comments/${id}`,{
        method:'DELETE'
    });
    const data=await res.json();
    console.log(data);
    
    return data;
}
