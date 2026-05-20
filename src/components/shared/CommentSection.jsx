import { Pencil } from "lucide-react"
import DeleteComment from "./DeleteComment"
import Image from "next/image"
import UpdateComment from "./UpdateComment"

const CommentSection = ({ commentData: data, refetchComments }) => {
    if (!data || data.length === 0) {
        return (
            <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm text-center text-gray-500">
                No comments yet. Be the first to share your thoughts!
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {data.map((comment) => (
                <div key={comment._id} className="flex mt-6 items-start justify-between gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex gap-4">
                        <Image
                            src={comment.image || "https://i.pravatar.cc/150?img=12"}
                            alt={comment.name || "user"}
                            width={55}
                            height={55}
                            className="h-14 w-14 rounded-full object-cover"
                        />
                        <div>
                            <div className="flex flex-wrap items-center gap-2">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    {comment.name || "Guest"}
                                </h2>
                                <span className="text-sm text-gray-500">
                                    {comment.comment_date || ""}
                                </span>
                            </div>
                            <p className="mt-3 text-gray-700">
                                {comment.comment}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <UpdateComment comment={comment} refetchComments={refetchComments}/>
                        <DeleteComment 
                            id={comment._id} 
                            comment={comment.comment} 
                            refetchComments={refetchComments} 
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CommentSection  