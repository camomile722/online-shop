import {
    Box,
    Button,
    Flex,
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Wrapper from "../components/wrapper/Wrapper";
import { ArrowLeft } from "../theme/icons";
import { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../slices/productsApiSlice";
import { addToCart } from "../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../components/notification/Notification";
import { toggleToWishList } from "../slices/wishListSlice";
import { ShippingInfo } from "../components/product/ShippingInfo";
import { ProductInfo } from "../components/product/ProductInfo";
import WishListButton from "../components/button/WishListButton";
import ProductCard from "../components/product/ProductCard";
import AppointmentForm from "../components/appointment/AppointmentForm";
import { ContactPopover } from "../components/contact/ContactPopover";
import { Helmet } from "react-helmet";

export interface ProductDetailScreenProps {
    handleLikeToggle?: () => void;
}
export const ProductDetailScreen = ({
    handleLikeToggle,
}: ProductDetailScreenProps) => {
    const { id: productId } = useParams();
    const { data: product, isLoading, error } = useGetProductByIdQuery(
        productId
    );
    // const [product, setProduct] = useState<ProductProps | null>(null);

    // useEffect(() => {
    //     const fetchItem = async () => {
    //         const { data } = await axios.get(`/api/products/${productId}`);
    //         setProduct(data);
    //     };
    //     fetchItem();
    // }, [productId]);

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isItemAdded, setIsItemAdded] = useState(false);

    const addToCartHandler = () => {
        dispatch(addToCart({ ...product, qty }));
        // navigate(`/cart/${productId}?qty=${qty}`);
        setIsItemAdded(true);
        setTimeout(() => {
            setIsItemAdded(false);
        }, 2000);
    };
    const handleAddToWishlist = () => {
        if (handleLikeToggle) {
            handleLikeToggle();
        }
        dispatch(toggleToWishList(product));
        console.log("add to wishlist", product);
        console.log("isLiked", isLiked);
    };
    const { items } = useSelector((state: any) => state.wishList);
    const [isLiked, setIsLiked] = useState(false);
    const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
    const handleAppointmentSubmit = (
        date: string,
        time: string,
        name: string,
        email: string,
        phone: string
    ) => {
        console.log("Termin vereinbart für:", time, date, name, email, phone);
    };

    useEffect(() => {
        if (items && items.find((item: any) => item?._id === product?._id)) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [items, product]);

    return (
        <>
            <Helmet>
                <title>{`${product?.title} %Reduziert | SALEx Shop`} </title>
                <meta name="description" content={product?.description} />
            </Helmet>
            <Wrapper padding="0">
                {isLoading ? (
                    <Flex justifyContent="center" my={4}>
                        <Spinner />
                    </Flex>
                ) : (
                    <>
                        {/* Alert */}
                        {isItemAdded && (
                            <Notification
                                status="success"
                                text="Item was added to your cart! "
                            >
                                <Box textDecoration="underline" ml={2}>
                                    <Link to="/cart">
                                        {" "}
                                        Go to checkout to complete your order.
                                    </Link>
                                </Box>
                            </Notification>
                        )}
                        <Box px={{ base: 4, md: 10 }} pb={{ base: 4, md: 10 }}>
                            <IconButton
                                aria-label="Back"
                                icon={<ArrowLeft boxSize={8} />}
                                _hover={{ opacity: "1" }}
                                mb="3"
                                onClick={() => window.history.back()}
                            />
                            <Flex
                                gap={{ base: 4 }}
                                flexWrap="wrap"
                                justifyContent={{
                                    base: "space-between",
                                    md: "flex-start",
                                }}
                            >
                                <Box width={{ base: "100%", md: "40%" }}>
                                    <ProductCard product={product} />
                                </Box>
                                <Flex
                                    flexDir="column"
                                    width={{ base: "100%", md: "40%" }}
                                    gap={{ base: 6, md: 10 }}
                                >
                                    <ProductInfo
                                        product={product}
                                        setQty={setQty}
                                        showSelectQty
                                    />
                                    <Flex gap="2">
                                        <ContactPopover>
                                            <Button
                                                borderRadius="none"
                                                width="90%"
                                                py={6}
                                                bg="black"
                                                color="white"
                                                textTransform="uppercase"
                                                onClick={() =>
                                                    setIsAppointmentOpen(
                                                        !isAppointmentOpen
                                                    )
                                                }
                                            >
                                                Termin vereinbaren
                                            </Button>
                                        </ContactPopover>
                                        <WishListButton
                                            isLiked={isLiked}
                                            handleAddToWishlist={
                                                handleAddToWishlist
                                            }
                                            padding="6"
                                        />
                                    </Flex>
                                    {/* {isAppointmentOpen && (
                                    <AppointmentForm
                                        onSubmit={handleAppointmentSubmit}
                                    />
                                )} */}

                                    <Text fontSize="sm">
                                        Um Ihre gewünschten Möbelstücke
                                        abzuholen, vereinbaren Sie bitte einen
                                        Termin mit unserem Team.
                                    </Text>
                                    <ShippingInfo />
                                </Flex>
                            </Flex>
                        </Box>
                    </>
                )}
            </Wrapper>
        </>
    );
};
