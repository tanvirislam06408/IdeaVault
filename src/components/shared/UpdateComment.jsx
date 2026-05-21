"use client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Pencil } from "lucide-react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const UpdateComment = ({ comment ,refetchComments}) => {
  const id=comment?._id
  const onSubmit = async(e) => {
    e.preventDefault();
    
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER}/comment/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        comment:e.target.comment.value
      })
    })
    const data=await res.json()
    
    if(data.acknowledged){
      toast.success("Comment updated successfully");
      refetchComments();
      e.target.reset();
    }
    else{
      toast.error("Failed to update comment");
    }
  }
  return (
    <Modal>
      <Button aria-label="Edit comment" className="rounded-xl p-2 transition bg-gray-100 dark:bg-slate-700 dark:text-gray-300">
        <Pencil size={18} className="text-gray-600 dark:text-gray-300" />
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md dark:bg-slate-800 dark:border-gray-700">
            <Modal.CloseTrigger className="dark:text-gray-400" />
            <Modal.Header className="dark:border-gray-700">
              <Modal.Icon className="text-accent-soft-foreground">
                <FaEdit className="text-red-500" size={18} />
              </Modal.Icon>
              <Modal.Heading className="dark:text-gray-100">Edit Comment</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6 dark:bg-slate-800">
              <Surface variant="default" className="dark:bg-slate-800">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField defaultValue={comment?.comment} className="w-full dark:text-gray-100" name="comment">
                    <Label className="dark:text-gray-200">Comment</Label>
                    <Input placeholder="Enter your Comment" className="dark:bg-slate-600 dark:text-gray-100 dark:border-gray-600" />
                  </TextField>
                  <Modal.Footer className="dark:border-gray-700">
                    <Button slot="close" variant="outline" className="dark:bg-slate-700 dark:border-gray-600 dark:text-gray-300">
                      Cancel
                    </Button>
                    <Button className={'gradient-button'} type="submit" slot="close">Update Comment</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateComment;