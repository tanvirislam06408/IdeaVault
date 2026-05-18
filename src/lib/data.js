export const getFeaturedIdeas=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/featured-ideas`);
    const data=await res.json();
    
    return data;
}