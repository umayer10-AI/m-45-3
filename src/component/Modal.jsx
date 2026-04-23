"use client";
import React from "react";
import {CirclePlus, Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

const ModalTask = ({createTask}) => {
  return (
    <div>
      <div>
      <Modal>
        <Button>Open Form</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <CirclePlus className="size-5" />
                </Modal.Icon>
                <Modal.Heading>ADD To Books</Modal.Heading>
                
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form action={createTask} className="flex flex-col gap-4">
                    <TextField className="w-full" name="title" type="text">
                      <Label>Title</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="category" type="text">
                      <Label>Description</Label>
                      <Input placeholder="Enter your description" />
                    </TextField>
                    <TextField className="w-full" name="price" type="number">
                      <Label>Price</Label>
                      <Input placeholder="Enter your price" />
                    </TextField>
                    

                    <Modal.Footer>
                        <Button slot="close" variant="secondary">
                        Cancel
                        </Button>
                        <Button type="submit" slot="close">Send Book</Button>
                    </Modal.Footer>

                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
    </div>
  );
};

export default ModalTask;
