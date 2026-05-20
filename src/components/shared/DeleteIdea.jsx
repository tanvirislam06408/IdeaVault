'use client'
import { deleteComment } from "@/lib/data"

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
const DeleteIdea = ({idea}) => {
    // const id=idea?_id
    const router=useRouter();
    const handleDelete = async () => {
        const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/ideas/${idea._id}`,{
            'method':'DELETE',
            headers:{
                'content-type':'application/json'
            },
            
        })
        const data=await res.json();
      
        if (data.deletedCount > 0) {
            toast.success("Comment deleted successfully");
            router.refresh();
        }
        else{
            toast.error("Comment deleted failed");
        }
    }


    return (
        <AlertDialog>
            <Button variant="danger-soft" className={'w-full'}>Delete <MdDeleteOutline /></Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete your post permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-black">
                                {idea?.project_title}
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger-soft">
                                Delete Post
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};
export default DeleteIdea;