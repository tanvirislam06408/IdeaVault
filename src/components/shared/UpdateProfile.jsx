
import { authClient } from "@/lib/auth.client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Pencil } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const hanldeSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updateInfo = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.updateUser({
            name: updateInfo.name,
            image: updateInfo.image
        })
        if (data.status) {
            toast.success("Profile Updated Successfully")
        }
        if (error) {
           toast.success("profile update failed")
        }

    }
    return (
        <Modal>
            <Button
                className="w-full mt-8 gradient-button text-white font-semibold h-12 rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300"
                startContent={<Pencil size={18} />}
            >
                Update Profile <SquarePen />
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <SquarePen className="size-5" color='red' />
                            </Modal.Icon>
                            <Modal.Heading>Edit Profile</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={hanldeSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input className="focus:ring-red-500 focus:border-red-500 focus:outline-red-500 focus:outline focus:outline-2 focus-within:outline-red-500" placeholder="Enter your name" />
                                    </TextField>

                                    <TextField className="w-full" name="image">
                                        <Label>Image</Label>
                                        <Input className="focus:ring-red-500 focus:border-red-500 focus:outline-red-500 focus:outline focus:outline-2 focus-within:outline-red-500" placeholder="Enter your image" />
                                    </TextField>
                                    <Modal.Footer className="flex gap-2 justify-end p-4">
                                        <Button className={'border'} variant="outlined " slot="close">Cancel</Button>
                                        <Button type='submit' variant="soft" className={'gradient-button'} slot="close">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}

export default UpdateProfile