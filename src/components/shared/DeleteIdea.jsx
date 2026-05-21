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
                    <AlertDialog.Dialog className="sm:max-w-[400px] dark:bg-slate-800">
                        <AlertDialog.CloseTrigger className="dark:text-gray-400" />
                        <AlertDialog.Header className="dark:border-gray-700">
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="dark:text-gray-100">Delete your post permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body className="dark:border-gray-700">
                            <p className="text-black dark:text-gray-300">
                                {idea?.project_title}
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer className="dark:border-gray-700">
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