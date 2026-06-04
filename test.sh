num_requests=100

endpoint_url="http://localhost:3000/api/count"

data='{}'

send_request() {
    curl -s -o /dev/null -w "%{http_code}" \
        -X POST \
        -H "Content-Type: application/json" \
        -d "$data" \
        "$endpoint_url"
}

for ((i=1; i<=$num_requests; i++)); do
    send_request &
done

wait
echo "Done"