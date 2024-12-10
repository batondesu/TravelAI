"use client";

import {Button} from "@/components/ui/button";
import {TrashIcon} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {useState} from "react";

type ItineraryDayHeaderProps = {
  title: string;
};

export default function ItineraryDayHeader({title}: ItineraryDayHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between mb-2 text-lg font-bold leading-2 text-foreground ">
      <span>{title}</span>
    </div>
  );
}
