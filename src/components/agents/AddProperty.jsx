'use client'
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { useSetState } from "@mantine/hooks";
import Dropdown from "../ui/dropdown";
import FileDropZone from "../ui/Filedropzone";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getAgentLandlords } from "@/data-access-layer/agent";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { Field, FieldTitle, FieldLabel, FieldContent, FieldDescription } from "../ui/field";
import { Checkbox } from "../ui/checkbox";
import Submitbtn from "../ui/submitbtn";




export default function AddProperty({ initialData }) {
  const isEditMode = Boolean(initialData);
  const { role } = useParams();
  const isAgent = role === 'agent';
  const [file, setFile] = useState(isEditMode ? initialData.picture : null)
  const [hasServiceCharge, setHasServiceCharge] = useState(isEditMode ? initialData.hasServiceCharge : false)
  const [propertyType, setPropertyType] = useState(isEditMode ? initialData.property_type : null);
  const [landlord, setLandlord] = useSetState({
    id: isEditMode ? initialData.landlord_id : null,
    name: isEditMode ? initialData.landlord_name : null,
  });

  /*const { data: landlords, isLoading, isError, error } = useQuery({
    queryKey: ['landlords'],
    queryFn: getAgentLandlords
  });
  console.log(error);*/



  const handleSetLandlord = (landlord) => {
    setLandlord({ id: landlord.id, name: landlord.name })
  }


  const form = useForm({
    defaultValues: {
      name: initialData?.name ?? "",
      units: initialData?.units ?? '',
      location: initialData?.location ?? "",
      water_cost: initialData?.water_cost ?? '',
      service_charge: initialData?.service_charge ?? ''
    },
  })
  const { handleSubmit, register, formState } = form
  const { isSubmitting } = formState

  async function onSubmit(values) {
    try {
      const params = {
        picture: file,
        name: values.name,
        units: values.units,
        location: values.location,
        landlord_id: landlord.id,
        property_type: propertyType,
        has_service_charge: hasServiceCharge,
        service_charge: values.service_charge
      }
      console.log(params);
      /*const res = await fetch(
        isEditMode
          ? `/api/properties/${initialData!.id}`
          : `/api/properties`,
        {
          method: isEditMode ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      )

      if (!res.ok) throw new Error("Failed")

      const property = await res.json()
      toast.success(
        isEditMode ? "Property updated" : "Property created"
      )

      //onSuccess?.(property)*/
    } catch (err) {
      //toast.error("Something went wrong")
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className=" px-2">
        <div>
          <FieldLabel className="font-sans">Property Picture</FieldLabel>
          <FileDropZone onUpdate={(img) => setLandlord({ picture: img.file_path })} file={file} />
        </div>
        <br />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
          <div className="col-span-full sm:col-span-3">
            <Field>
              <FieldLabel htmlFor="name">
                Property name<span className="text-red-500">*</span>
              </FieldLabel>
              <Input
                type="text"
                id="name"
                name="name"
                {...register("name", { required: true })}
                //autoComplete="given-name"
                required
                placeholder="Block apartment"
              />
            </Field>
          </div>
          <div className="col-span-full sm:col-span-3">
            <Field>
              <FieldLabel htmlFor="number">
                Number of Units<span className="text-red-500">*</span>
              </FieldLabel>
              <Input
                type="text"
                id="units"
                name="units"
                {...register("units", { required: true })}
                //autoComplete="given-name"
                required

              />
            </Field>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 py-4">
          <div className="col-span-full sm:col-span-3">
            <Field>
              <FieldLabel htmlFor="location">
                Property Location<span className="text-red-500">*</span>
              </FieldLabel>
              <Input
                type="text"
                id="location"
                name="location"
                {...register("location", { required: true })}
                required
                placeholder="Ruiru, Nairobi"
              />
            </Field>
          </div>
          <div className="col-span-full sm:col-span-3">
            <Field>
              <FieldLabel htmlFor="location"> Water Unit Cost</FieldLabel>
              <Input
                type="number"
                id="water_cost"
                name="water_cost"
                {...register("water_cost", { required: false })}
              />
            </Field>
          </div>
        </div>
        <Separator className="col-span-full my-4" />
        <div className="col-span-full">
          <FieldLabel className="font-semibold text-foreground block">
            Select Property Type
          </FieldLabel>
          <PropertyType propertyType={propertyType} setPropertyType={setPropertyType} />
        </div>
        {/*isAgent && <div className="py-4">
          <FieldLabel>Property Landlord</FieldLabel>
          <Dropdown value={landlord.name} items={landlords} placeholder="Select Landlord" handleChange={handleSetLandlord} />
        </div>*/}

        <FieldLabel>
          <Field orientation="horizontal">
            <Checkbox id="hasServiceCharge" checked={hasServiceCharge} onCheckedChange={setHasServiceCharge} name="toggle-checkbox-2" />
            <FieldContent>
              <FieldTitle>Add Service Charge</FieldTitle>
              <FieldDescription>
                Add a monthly service charge to this property
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
        {hasServiceCharge && (
          <Field className="py-4">
            <FieldLabel htmlFor="number">Service Charge</FieldLabel>
            <Input
              type="text"
              id="service_charge"
              name="service_charge"
              {...register("service_charge", { required: true })}
            //autoComplete="given-name"


            />
          </Field>
        )}
        <br />
        <Submitbtn type="submit" text="Add Property" loading={false} fullwidth={false} />
      </form>
    </>
  )
}

const PropertyType = ({ propertyType, setPropertyType }) => {

  const types = [
    {
      id: 1,
      title: "Residential",
    },
    {
      id: 2,
      title: "Commercial",
    },
    {
      id: 3,
      title: "Industrial",
    },
  ];
  return (
    <>
      <RadioGroup
        className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        defaultValue={propertyType}
        onValueChange={(value) =>
          setPropertyType(value)
        }
      >
        {types.map((item) => (
          <div
            key={item.title}
            className={cn("border-input cursor-pointer relative flex flex-col gap-2 rounded-md border p-4 shadow-xs outline-none", item.title === propertyType && 'border-blue-600 bg-blue-50')}
          >
            <div className="flex justify-between">
              <RadioGroupItem
                id={item.id.toString()}
                value={item.title}
                className="order-1 after:absolute after:inset-0"
              />

              <FieldLabel
                htmlFor={item.id.toString()}
                className={cn("block text-sm font-medium text-muted-foreground", item.title === propertyType && 'text-primary')}
              >
                {item.title}
              </FieldLabel>
            </div>
          </div>
        ))}
      </RadioGroup>
    </>
  )
}