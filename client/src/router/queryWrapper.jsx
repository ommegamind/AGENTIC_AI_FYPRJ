import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const queryClient=new QueryClient();

export const QueryWrapper=({children})=>{
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}