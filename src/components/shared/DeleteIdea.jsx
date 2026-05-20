import { deleteComment } from "@/lib/data"

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
const DeleteIdea = () => {
    

    const handleDelete = async () => {
        const res = await deleteComment(id);
        if (res.deletedCount > 0) {
            toast.success("Comment deleted successfully");
            router.refresh();
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
                            <AlertDialog.Heading>Delete your comment permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-black">
                                {comment}
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Comment
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};
export default DeleteIdea;