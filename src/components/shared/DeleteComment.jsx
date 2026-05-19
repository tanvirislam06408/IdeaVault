import { deleteComment } from "@/lib/data"

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
const DeleteComment = ({ comment,id }) => {
    console.log(comment,id);

    const handleDelete = async () => {
        const res = await deleteComment(id);
        if (res.deletedCount > 0) {
            toast.success("Comment deleted successfully");
            router.refresh();
        }
    }
    return (
        <AlertDialog>
            <Button variant="outline" aria-label="Delete comment" className="rounded-xl p-2 transition hover:bg-red-50">
                <Trash2 size={18} className="text-red-500" />
            </Button>
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
export default DeleteComment;