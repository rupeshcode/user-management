import { removeItem } from "@/Redux/Slice/AddtoCartSlice";
import {
  Button,
  Card,
  Container,
  Input,
  Table,
  TextInput,
} from "@mantine/core";
import Image from "next/image";
import React from "react";
import * as Yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  addressLine1: string;
  city: string;
  district: string;
  state: string;
  pinCode: string;
  mobile: string;
};
const validationSchema = Yup.object().shape({
  addressLine1: Yup.string().required("address is Required"),
  city: Yup.string().required("city is Required"),
  district: Yup.string().required("district is Required"),
  state: Yup.string().required("state is Required"),
  pinCode: Yup.string().required("pinCode is Required"),
  mobile: Yup.string().required("mobile is Required"),
});
const ColorlibAddToCart = () => {
  const products = useSelector((state: RootState) => state.Cart.cart);
  console.log("products", products);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("data", data);

  const dispatch = useDispatch();
  const handleRemove = (item: any) => {
    dispatch(removeItem(item));
  };

  const row = products.map((product: any) => (
    <Table.Tr key={product.id}>
      <Table.Td>
        {
          <Image
            src={product.image}
            alt={product.name}
            height={100}
            width={100}
          />
        }
      </Table.Td>
      <Table.Td>{product.desc}</Table.Td>
      <Table.Td>{product.rs}</Table.Td>
      <Table.Td>
        {
          <div className="d-flex">
            <Button>-</Button>
            <TextInput style={{ width: "40px" }} defaultValue={1} readOnly />
            <Button>+</Button>
          </div>
        }
      </Table.Td>
      <Table.Td>{product.rs}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <h3
        className="d-flex justify-content-center align-items-center"
        style={{ color: "burlywood" }}
      >
        Shopping Cart
      </h3>
      <h5 style={{ color: "GrayText" }}>Items in your Cart</h5>
      <div className="row p-4">
        <div className="col-md-8">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Product</Table.Th>
                <Table.Th>Details</Table.Th>

                <Table.Th>Price</Table.Th>
                <Table.Th>Quantity</Table.Th>
                <Table.Th>Total</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{row}</Table.Tbody>
          </Table>
        </div>
        <div
          className="col-md-4 container "
          style={{ border: "1px solid lightgray" }}
        >
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <h4>Price Details</h4>
            <hr />
            <div className="p-3">
              <div className="d-flex justify-content-between">
                <div>Price </div>
                <div>$20</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Delivery Charges </div>
                <div>Free</div>
              </div>
              <div className="row">
                <small>Delivery Address:</small>
                <div className="col-6 mb-2">
                  <Input
                    placeholder="Address line 1"
                    {...register("addressLine1")}
                  />
                  <span className="text-danger">
                    {errors.addressLine1?.message}
                  </span>
                </div>
                <div className="col-6">
                  <Input placeholder="city" {...register("city")} />
                  <span className="text-danger">{errors.city?.message}</span>
                </div>
                <div className="col-6">
                  <Input placeholder="District" {...register("district")} />
                  <span className="text-danger">
                    {errors.district?.message}
                  </span>
                </div>
                <div className="col-6 mb-2">
                  <Input placeholder="State" {...register("state")} />
                  <span className="text-danger">{errors.state?.message}</span>
                </div>
                <div className="col-6">
                  <Input placeholder="Pin" {...register("pinCode")} />
                  <span className="text-danger">{errors.pinCode?.message}</span>
                </div>
                <div className="col-6">
                  <Input placeholder="Mobile" {...register("mobile")} />
                  <span className="text-danger">{errors.mobile?.message}</span>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div>Total amount </div>
                <div>$20</div>
              </div>
              <div className="d-flex justify-content-center mb-2 mt-2">
                <Button type="submit">Proceed to Checkout</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ColorlibAddToCart;
