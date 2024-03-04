import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReactNode, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

type Props = {
  isUserjoining: boolean;
  children: ReactNode;
};

const formSchema = z.object({
  username: z.string(),
  roomid: z.string(),
});

const JoinRoomDialog = ({ children, isUserjoining }: Props) => {

  const [errorFillingForm, setErrorFillingForm] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (!data.username || !data.roomid) {
      setErrorFillingForm(true);
      return;
    }
    // if (data.username && !data.roomid) {
    //   data.roomid = `${data.username}'s-room`;
    // }
    // console.log(data);

    
    const userJoiningURL = `/${data.username}/room/${data.roomid}`
    let isAdmin: boolean = true;
    if (isUserjoining) {
      isAdmin = false
    }

    navigate({
      pathname: userJoiningURL,
      search: `?isAdmin=${isAdmin}`
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={isUserjoining ? "bg-transparent" : "bg-[#A725D4]"}
          variant={!isUserjoining ? "default" : "outline"}
        >
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {isUserjoining ? (
          <DialogHeader>
            <DialogTitle>Join Room</DialogTitle>
            <DialogDescription>
              Enter Username and Room Id to Join the Room.
            </DialogDescription>
          </DialogHeader>
        ) : (
          <DialogHeader>
            <DialogTitle>Create Room</DialogTitle>
            <DialogDescription>
              Enter Username to Create a Room.
            </DialogDescription>
          </DialogHeader>
        )}
        {errorFillingForm && (
          <p className="text-red-500">Please fill all fields.</p>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="roomid"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-right">Room Id</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Aden's-room"
                        className="col-span-3"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the Room Id you are Joining.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-right">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Aden"
                        className="col-span-3"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button onClick={() => setErrorFillingForm(false)} type="submit">
                Join
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default JoinRoomDialog;
