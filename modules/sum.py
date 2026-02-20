def run_sum(a, b):
    return [
        {"text": "a=", "color": "blue"},
        {"text": str(a), "color": "black"},
        {"text": "\n", "color": "black"},
        {"text": "b=", "color": "blue"},
        {"text": str(b), "color": "black"},
        {"text": "\n", "color": "black"},
        {"text": "sum a + b is : ", "color": "black"},
        {"text": str(a+b), "color": "black"}
    ]