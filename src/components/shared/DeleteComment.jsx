

import { deleteComment } from "@/lib/data"
import { AlertDialog, Button } from "@heroui/react"
import { Trash2 } from "lucide-react"
import toast from "react-hot-toast"

const DeleteComment = ({ comment, id, refetchComments }) => {
    const handleDelete = async () => {
        const res = await deleteComment(id)
        if (res.deletedCount > 0) {
            toast.success("Comment deleted successfully")
            if (refetchComments) {
                refetchComments()
            }
        }
    }

    return (
        <AlertDialog>
            <Button variant="outline" aria-label="Delete comment" className="rounded-xl p-2 transition hover:bg-red-50">
                <Trash2 size={18} className="text-red-500" />
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px] dark:bg-slate-800">
                        <AlertDialog.CloseTrigger className="dark:text-gray-400" />
                        <AlertDialog.Header className="dark:border-gray-700">
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="dark:text-gray-100">Delete your comment permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body className="dark:border-gray-700">
                            <p className="text-black dark:text-gray-300">
                                {comment}
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer className="dark:border-gray-700">
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
    )
}

export default DeleteComment